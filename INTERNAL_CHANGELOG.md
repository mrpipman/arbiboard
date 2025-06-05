# 🛠 Arbiboard – Internal Changelog

Questo changelog tiene traccia delle modifiche tecniche applicate al progetto a partire dallo stage `Arbiboard_Stage_85_Updated`.

---

## 🔄 Modifiche applicate (Giugno 2025 – Sessione Corrente)

### ✅ Integrazioni completate
- [x] Integrazione modulo RLHF feedback loop con file `rl_feedback_log.csv`
- [x] Aggiunto endpoint `/health` FastAPI per monitoraggio cron/uptime
- [x] Aggiunto test unitario `test_healthcheck.py`
- [x] Script `cron_alert_telegram.py` con fallback email se il bot Telegram fallisce
- [x] Configurato badge `README.md` per:
  - ✅ Test (GitHub Actions)
  - ✅ Coverage (Codecov)
  - ✅ Build status
  - ✅ Uptime backend/API, frontend e bot via UptimeRobot
- [x] Creato workflow GitHub Actions `.github/workflows/test.yml`
- [x] Aggiunto file `rl_feedback_log.csv` per bootstrapping RLXP training
- [x] Conformità cron logging in `/var/log/arbiboard/cron_feedback.log`
- [x] Validazione healthcheck in test CI

### 📁 File aggiunti
- `healthcheck.py`
- `test_healthcheck.py`
- `cron_alert_telegram.py`
- `.github/workflows/test.yml`
- `rl_feedback_log.csv`
- `INTERNAL_CHANGELOG.md` (questo file)

---

### ⏳ Prossimi step consigliati
- Caricare `rl_feedback_log.csv` nella pipeline di policy RL per XP
- Integrare cron job giornaliero in container backend
- Estendere explainability causale su classifier LLM
- Test esperimenti gamificati live (leaderboard + reward shaping)

