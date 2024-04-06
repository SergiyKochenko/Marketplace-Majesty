from django.shortcuts import render




from store.serializers import  ProductSerializer, CategorySerializer, CartSerializer, CartOrderSerializer, CartOrderItemSerializer
from userauths.models import User
from store.models import Cart, CartOrderItem, Notification, Product,Category, CartOrder, Gallery, ProductFaq, Review,  Specification, Coupon, Color, Size, Wishlist, Vendor
from decimal import Decimal


from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response


class CategoryListAPIView(generics.ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = [AllowAny]

class ProductListAPIView(generics.ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    permission_classes = [AllowAny]

class ProductDetailAPIView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        slug = self.kwargs['slug']
        return Product.objects.get(slug=slug)
    
class CartAPIView(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        payload = request.data
        
        product_id = payload['product_id']
        user_id = payload['user_id']
        qty = payload['qty']
        price = payload['price']
        shipping_amount = payload['shipping_amount']
        country = payload['country']
        size = payload['size']
        color = payload['color']
        cart_id = payload['cart_id']
        
        product = Product.objects.get(id=product_id)
        if user_id != "undefined":
            user = User.objects.get(id=user_id)
        else:
            user = None

        tax = Tax.object.filter(country=country).first()
        if tax:
            tax_rate = tax.rate / 100
        else:
            tax_rate = 0
        
        cart = Cart.objects.filter(cart_id=cart_id, product=product).first()

        if cart:
            cart.product = product
            cart.user = user
            cart.qty = qty
            cart.price = price
            cart.sub_total = Decimal(price) * int(qty)
            cart.shipping_amount = Decimal(shipping_amount) * int(qty)
            cart.tax_fee = int(qty) * Decimal(tax_rate)
            cart.color = color
            cart.size = size
            cart.country = country
            cart.cart_id = cart_id

            service_fee_precentage = 5 /100
            cart.service_fee = service_fee_precentage * cart.sub_total

            cart.total = cart.sub_total + cart.shipping_amount + cart.service_fee + cart.tax_fee
            cart.save()

            return Response({'message':"Cart Updated Successfully"}, status=status.HTTP_200_OK)
        else:
            cart = Cart()
            cart.product = product
            cart.user = user
            cart.qty = qty
            cart.price = price
            cart.sub_total = Decimal(price) * int(qty)
            cart.shipping_amount = Decimal(shipping_amount) * int(qty)
            cart.tax_fee = int(qty) * Decimal(tax_rate)
            cart.color = color
            cart.size = size
            cart.country = country
            cart.cart_id = cart_id

            service_fee_precentage = 5 /100
            cart.service_fee = service_fee_precentage * cart.sub_total

            cart.total = cart.sub_total + cart.shipping_amount + cart.service_fee + cart.tax_fee
            cart.save()

            return Response({'message':"Cart Created Successfully"}, status=status.HTTP_201_CREATED)

