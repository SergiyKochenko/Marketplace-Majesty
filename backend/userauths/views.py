from django.shortcuts import render


from rest_framework_simplejwt.views import TokenObtainPairView


from userauths.models import Profile, User
from userauths.serializer import MyTokenObtainPairSerializer, RegisterSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
