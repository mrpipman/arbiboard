<<<<<<< HEAD
# FastAPI entry point

from fastapi import Request
import hmac, hashlib

STRIPE_SECRET = "whsec_example"

# Dummy memoria tier accesso
USER_TIERS = {}

@app.post("/webhook/stripe")
async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get('stripe-signature')
    if not sig_header or not hmac.compare_digest(sig_header, "sig_test", STRIPE_SECRET.encode()):
        return {"status": "unauthorized"}
    # Simula evento 'checkout.session.completed'
    data = await request.json()
    email = data.get("customer_email", "unknown")
    USER_TIERS[email] = "pro"
    print(f"✅ Accesso Pro attivo per {email}")
    return {"status": "ok"}

def check_api_access(email: str):
    return USER_TIERS.get(email, "free")
=======
# FastAPI entry point
>>>>>>> 51c294f518d4bce47afc2ad87c508627ac019b57
