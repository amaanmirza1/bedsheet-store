import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bedsheet_store.settings")
django.setup()

from django.contrib.auth import get_user_model

User = get_user_model()

username = os.getenv("shahrukhkhan")
email = os.getenv("sk0598153@gmail.com")
password = os.getenv("key@8265")

if username and email and password:
    if not User.objects.filter(username=shahrukhkhan).exists():
        User.objects.create_superuser(
            username=shahrukhkhan,
            email=sk0598153@gmail.com,
            password=key@8265
        )
        print("Superuser created!")
    else:
        print("Superuser already exists.")
else:
    print("Superuser env variables missing.")