from django.shortcuts import render
from rest_framework import generics
from .serializers import OfficeSerializer, DoctorSerializer, AppointmentSerializer
from .models import Office, Doctor, Appointment
# Create your views here.

class OfficeList(generics.ListCreateAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer

class OfficeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer



class DoctorList(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class DoctorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer



class AppointmentList(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer