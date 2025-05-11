from django.contrib import admin
from .models import CustomUser, Productos, Carrito

# Register your models here

admin.site.register(CustomUser)
admin.site.register(Productos)
admin.site.register(Carrito)