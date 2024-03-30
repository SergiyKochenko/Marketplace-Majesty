from django.shortcuts import render


from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated


from userauths.models import Profile, User
from userauths.serializer import MyTokenObtainPairSerializer, RegisterSerializer, UserSerializer

import random
import shortuuid


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

def generate_otp():
        uuid_key = shortuuid.uuid()
        unique_key = uuid_key[:6]
        return unique_key

class PasswordRestEmailVerify(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer

    def get_object(self):
        email = self.kwargs['email']
        user = User.objects.get(email=email)

        print("user =====", user)

        if user:
             user.otp = generate_otp()
             user.save()

             uidb64 = user.pk
             otp = user.otp

             link = f"http://localhost:5173/create-new-password?otp={otp}&uidb64={uidb64}"

             print("link =====", link)



        return user