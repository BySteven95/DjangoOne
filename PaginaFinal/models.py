from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

class CustomUser(AbstractUser):
    
    nombre = models.TextField()
    apellido = models.TextField()
    email = models.EmailField(unique=True)
    direccion = models.TextField()

    def __str__(self):
        return self.username
    
class Productos(models.Model):

    Nombre_producto = models.TextField(unique=True, primary_key=True)
    Precio = models.IntegerField()

class Carrito(models.Model):

    id_usuario = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    Producto_En_Carrito = models.TextField()
    Cantidad = models.IntegerField()
    Total_Precio_Producto = models.IntegerField()
