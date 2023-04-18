from django.db import models

# Create your models here.
# tunr/models.py
class Office(models.Model):
    name = models.CharField(max_length=200)
    location = models.CharField(max_length=100)
    number = models.CharField(max_length=100)
    specialty = models.CharField(max_length=100)
    photo_url = models.CharField(max_length=1000)

    def __str__(self):
        return self.name


class Doctor(models.Model):
    office = models.ForeignKey(Office, null=True, on_delete=models.CASCADE, related_name='doctors')
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    gender = models.CharField(max_length=30)
    description = models.TextField(max_length=1000)
    image_url = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    

class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='appointmets')
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=100)
    request = models.CharField(max_length=200)
    date_of_appointment = models.DateField()

    def __str__(self):
        return self.name