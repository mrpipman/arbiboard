
// backend/sdk.js
const express = require("express");
const router = express.Router();
const { logger } = require("./monitoring");
const { db } = require("./db");
const { OpenAI } = require("openai");
const openai = new OpenAI();

// Middleware per XP e Badge
async function updateReputation(userId, deltaXP = 10) {
  await db.read();
  const user = db.data.users.find((u) => u.id === userId);
  if (user) {
    user.xp = (user.xp || 0) + deltaXP;
    if (user.xp > 100) user.badge = "🏅 Esperto";
  }
  await db.write();
}

// Webhook per retraining trigger
router.post("/webhook/retrain", async (req, res) => {
  const { reason } = req.body;
  logger.info("Retraining triggered", { reason });
  res.status(200).json({ message: "Retraining accepted" });
});

// SDK endpoint pubblico (read-only)
router.get("/sdk/status", async (req, res) => {
  await db.read();
  res.json({
    balance: db.data.balance,
    threads: db.data.threads,
  });
});

// Moderazione AI simulata con OpenAI
router.post("/community/moderate", async (req, res) => {
  const { content, userId } = req.body;
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Sei un moderatore AI. Rispondi solo con: 'APPROVATO' o 'RIFIUTATO'." },
      { role: "user", content }
    ]
  });

  const decision = completion.choices[0].message.content;
  if (decision.includes("APPROVATO")) await updateReputation(userId, 15);
  res.json({ decision });
});

// Explainability v3: Predictive Counterfactuals
router.post("/predict/counterfactual", async (req, res) => {
  const { originalBet, changedFeature, newValue } = req.body;
  const prompt = `Considerando il bet ${JSON.stringify(originalBet)}, cosa sarebbe successo se ${changedFeature} fosse stato ${newValue}?`;  
  const explanation = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "Sei un analista AI per un sistema di scommesse. Fornisci spiegazioni controfattuali dettagliate con focus su causalità." },
      { role: "user", content: prompt }
    ]
  });

  res.json({ counterfactual: explanation.choices[0].message.content });
});

// Live Simulation Trainer per utenti Pro
router.post("/simulate", async (req, res) => {
  const { initialBalance, steps } = req.body;
  let balance = initialBalance || 100;
  let log = [];

  for (const step of steps) {
    const { market, odds, stake, prediction } = step;
    const result = Math.random() < prediction.probability ? 'WIN' : 'LOSE';
    const profit = result === 'WIN' ? (stake * (odds - 1)) : -stake;
    balance += profit;
    log.push({ market, result, profit, balance });
  }

  res.json({ final_balance: balance, log });
});

// Localizzazione e onboarding per espansione geografica
router.post("/onboarding/region", async (req, res) => {
  const { regionCode, language, regulatorContact } = req.body;
  logger.info("Onboarding nuova regione", { regionCode, language });

  await db.read();
  db.data.regions = db.data.regions || [];
  db.data.regions.push({ regionCode, language, regulatorContact, onboardedAt: new Date().toISOString() });
  await db.write();

  res.json({ status: "OK", region: regionCode });
});

module.exports = router;
