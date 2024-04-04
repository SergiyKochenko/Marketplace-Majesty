from django.shortcuts import render


from store.serializers import  ProductSerializer, CategorySerializer
from store.models import Product ,Category

from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated


class CategoryListAPIView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [AllowAny]

class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = [AllowAny]