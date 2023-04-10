# tunr/urls.py
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('offices/', views.OfficeList.as_view(), name='office_list'),
    path('offices/<int:pk>', views.OfficeDetail.as_view(), name='office_detail'),
    path('doctors/', views.DoctorList.as_view(), name='doctor_list'),
    path('doctors/<int:pk>', views.DoctorDetail.as_view(), name='doctor_detail'),
    path('make-an-appointment/', views.AppointmentList.as_view(), name='appointment')
]
