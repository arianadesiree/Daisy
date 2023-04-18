from django.contrib import admin
from .models import Doctor, Office, Appointment

admin.site.register(Doctor)
admin.site.register(Office)
admin.site.register(Appointment)