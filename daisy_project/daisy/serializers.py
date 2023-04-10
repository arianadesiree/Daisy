from rest_framework import serializers
from .models import Office, Doctor, Appointment

class OfficeSerializer(serializers.HyperlinkedModelSerializer):
    doctors = serializers.HyperlinkedRelatedField(
        view_name='doctor_detail',
        many=True,
        read_only=True
    )

    class Meta:
       model = Office
       fields = ('id', 'name', 'location', 'number', 'specialty', 'photo_url', 'doctors')

    
class DoctorSerializer(serializers.HyperlinkedModelSerializer):
    office = serializers.HyperlinkedRelatedField(
        view_name='office_detail',
        read_only=True
    )

    class Meta:
        model = Doctor
        fields = ('id', 'office', 'name', 'location', 'specialty', 'gender', 'image_url')


class AppointmentSerializer(serializers.HyperlinkedModelSerializer):
    doctors = serializers.HyperlinkedRelatedField(
        view_name='doctor_detail',
        many=True,
        read_only=True
    )

    class Meta:
       model = Appointment
       fields = ('id', 'first_name', 'last_name', 'email', 'phone_number', 'request', 'date_of_appointment', 'doctors')