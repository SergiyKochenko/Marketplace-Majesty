from django.contrib import admin

from store.models import Product, Category

admin.site.register(Product)
admin.site.register(Category)