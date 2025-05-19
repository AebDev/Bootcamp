from fastapi import Depends, HTTPException
from auth import get_current_active_user
from models import User

def admin_required(user: User = Depends(get_current_active_user)):
    if not user.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    return user
