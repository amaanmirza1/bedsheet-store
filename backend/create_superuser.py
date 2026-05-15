import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bedsheet_store.settings")
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

username = "shahrukhkhan"
email = "sk0598153@gmail.com"
password = "key@8265"

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(
        username=username,
        email=email,
        password=password
    )
    print("Superuser created!")
else:
    print("Superuser already exists.")