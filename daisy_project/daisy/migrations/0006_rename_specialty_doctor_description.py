# Generated by Django 4.2 on 2023-04-11 14:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('daisy', '0005_alter_doctor_specialty'),
    ]

    operations = [
        migrations.RenameField(
            model_name='doctor',
            old_name='specialty',
            new_name='description',
        ),
    ]
