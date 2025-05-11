from django.shortcuts import redirect, render
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib import messages
from django.db.models import F
from .models import Productos, Carrito


# Create your views here.

def index(request):
  return render(request, "index.html")

def pagina1(request):
  return render(request, "wiki/pagina1.html")

def pagina2(request):
  return render(request, "wiki/pagina2.html")

def pagina3(request):
  return render(request, "wiki/pagina3.html")

def pagina4(request):
  return render(request, "wiki/pagina4.html")

def pagina5(request):
  return render(request, "wiki/pagina5.html")

def pagina6(request):
  return render(request, "wiki/pagina6.html")

def pagina7(request):
  return render(request, "wiki/pagina7.html")

def pagina8(request):
  return render(request, "wiki/pagina8.html")

def pagina9(request):
  return render(request, "wiki/pagina9.html")

def pagina10(request):
  return render(request, "wiki/pagina10.html")

def pagina11(request):
  return render(request, "wiki/pagina11.html")

def pagina12(request):
  return render(request, "wiki/pagina12.html")

def pagina13(request):
  return render(request, "wiki/pagina13.html")

def pagina14(request):
  return render(request, "wiki/pagina14.html")

def pagina15(request):
  return render(request, "wiki/pagina15.html")

def pagina16(request):
  return render(request, "wiki/pagina16.html")

def pagina17(request):
  return render(request, "wiki/pagina17.html")

def pagina18(request):
  return render(request, "wiki/pagina18.html")

def pagina19(request):
  return render(request, "wiki/pagina19.html")

def pagina20(request):
  return render(request, "wiki/pagina20.html")

def pagina21(request):
  return render(request, "wiki/pagina21.html")

def pagina22(request):
  return render(request, "wiki/pagina22.html")

def pagina23(request):
  return render(request, "wiki/pagina23.html")

def pagina24(request):
  return render(request, "wiki/pagina24.html")

def pagina26(request):
  return render(request, "wiki/pagina26.html")

def pagina27(request):
  return render(request, "wiki/pagina27.html")

def pagina28(request):
  return render(request, "wiki/pagina28.html")

def pagina29(request):
  return render(request, "wiki/pagina29.html")

def pagina30(request):
  return render(request, "wiki/pagina30.html")

def pagina31(request):
  return render(request, "wiki/pagina31.html")

def pagina32(request):
  return render(request, "wiki/pagina32.html")

def pagina34(request):
  return render(request, "wiki/pagina34.html")

def pagina35(request):
  return render(request, "wiki/pagina35.html")

def shop(request, usuario):
  Total_compras = 0
  user = get_user_model().objects.get(username=usuario)
  carrito = Carrito.objects.filter(id_usuario = user)
  for x in carrito:
    Total_compras += x.Total_Precio_Producto
  return render(request, "shop/tienda.html", {
    'usuario' : get_user_model().objects.get(username=usuario),
    'productos': Carrito.objects.filter(id_usuario = user),
    'Total_compras': Total_compras
  })

def producto1(request, usuario):
  return render(request, "shop/producto1.html", {
        'usuario': usuario
  })

def producto2(request, usuario):
  return render(request, "shop/producto2.html", {
        'usuario': usuario
  })

def producto3(request, usuario):
  return render(request, "shop/producto3.html", {
        'usuario': usuario
    })

def producto4(request, usuario):
  return render(request, "shop/producto4.html", {
        'usuario': usuario
    })

def producto5(request, usuario):
  return render(request, "shop/producto5.html", {
        'usuario': usuario
    })

def producto6(request, usuario):
  return render(request, "shop/producto6.html", {
        'usuario': usuario
    })

def producto7(request, usuario):
  return render(request, "shop/producto7.html", {
        'usuario': usuario
    })

def producto8(request, usuario):
  return render(request, "shop/producto8.html", {
      'usuario': usuario
  })

def producto9(request, usuario):
  return render(request, "shop/producto9.html", {
      'usuario': usuario
  })

def producto10(request, usuario):
  return render(request, "shop/producto10.html", {
      'usuario': usuario
  })

def producto11(request, usuario):
  return render(request, "shop/producto11.html", {
      'usuario': usuario
  })

def producto12(request, usuario):
  return render(request, "shop/producto12.html", {
      'usuario': usuario
  })

def producto13(request, usuario):
  return render(request, "shop/producto13.html", {
      'usuario': usuario
  })

def producto14(request, usuario):
  return render(request, "shop/producto14.html", {
        'usuario': usuario
    })

def producto15(request, usuario):
  return render(request, "shop/producto15.html", {
        'usuario': usuario
    })

def producto16(request, usuario):
  return render(request, "shop/producto16.html", {
        'usuario': usuario
    })

def producto17(request, usuario):
  return render(request, "shop/producto17.html", {
        'usuario': usuario
    })

def producto18(request, usuario):
  return render(request, "shop/producto18.html", {
        'usuario': usuario
    })

def producto19(request, usuario):
  return render(request, "shop/producto19.html", {
        'usuario': usuario
    })

def producto20(request, usuario):
  return render(request, "shop/producto20.html", {
        'usuario': usuario
    })

def AuthLogin(request):
    if request.method == 'GET':
      return render(request, "auth/login.html")
    elif request.method == 'POST':
      correo = request.POST.get('correo')
      password = request.POST.get('contraseña')  
      try:
        user = get_user_model().objects.get(email=correo)
      except get_user_model().DoesNotExist:
        messages.error(request, 'El usuario no existe')
        return redirect('/auth/login')

      if user.check_password(password):
        url = "/mainshop/" + user.get_username()
        return redirect(url)
      else:
        messages.error(request, 'La contraseña es incorrecta')
        return redirect('/auth/login')

def AuthRegister(request):
  if request.method == 'GET':
    return render(request, "auth/register.html")
  if request.method == 'POST':
    nombre = request.POST['nombre']
    apellido = request.POST['apellido']
    direccion = request.POST['direccion']
    username = request.POST['usuario']
    email = request.POST['email']
    password = request.POST['contraseña1']
    password_confirm = request.POST['contraseña2']
    if password == password_confirm:
      hashed_password = make_password(password)
      User = get_user_model()
      try:
        user = User(username=username, email=email, password=hashed_password, nombre=nombre, apellido=apellido, direccion=direccion)
        user.save()
        return redirect ('/auth/login')
      except:
        messages.error(request, 'El usuario ya existía')
        return redirect ('/auth/register')
    else:
      messages.error(request, 'La contraseña no coincide')
      return redirect ('/auth/register')

def contact(request):
  return render(request, "wiki/contacto.html")

def JavaScriptIndex(request):
  return render(request, "JavaScript/index.html")

def JavaScriptPrograma1(request):
  return render(request, "JavaScript/Programa1.html")

def JavaScriptPrograma2(request):
  return render(request, "JavaScript/Programa2.html")

def JavaScriptPrograma3(request):
  return render(request, "JavaScript/Programa3.html")

def JavaScriptPrograma4(request):
  return render(request, "JavaScript/Programa4.html")

def JavaScriptPrograma5(request):
  return render(request, "JavaScript/Programa5.html")

def JavaScriptPrograma6(request):
  return render(request, "JavaScript/Programa6.html")

def JavaScriptPrograma7(request):
  return render(request, "JavaScript/Programa7.html")

def JavaScriptPrograma8(request):
  return render(request, "JavaScript/Programa8.html")

def JavaScriptPrograma9(request):
  return render(request, "JavaScript/Programa9.html")

def JavaScriptPrograma10(request):
  return render(request, "JavaScript/Programa10.html")

def Agregar(request, usuario, Nombre_Producto, cantidad):
    user = get_user_model().objects.get(username=usuario)
    BDproductos = Productos.objects.get(Nombre_producto=Nombre_Producto)
    Precio_Producto = BDproductos.Precio
    Total_Parcial = cantidad * Precio_Producto

    if Carrito.objects.filter(id_usuario=user, Producto_En_Carrito = Nombre_Producto).exists():
      carrito_obj, created = Carrito.objects.update_or_create(
        id_usuario=user,
        Producto_En_Carrito=Nombre_Producto,
        defaults={
            'Cantidad': F('Cantidad') + cantidad,
            'Total_Precio_Producto': F('Total_Precio_Producto') + Total_Parcial
        }
      )
    else:
      Carrito.objects.create(
        id_usuario=user,
        Producto_En_Carrito=Nombre_Producto,
        Cantidad=cantidad,
        Total_Precio_Producto=Total_Parcial
      )

    url = "/mainshop/" + usuario
    return redirect(url, {
      'usuario': usuario,
      'database': Carrito.objects.filter(id_usuario = user)
    })

def Eliminar(request, usuario, Nombre_Producto):
  user = get_user_model().objects.get(username=usuario)
  Carrito.objects.get(id_usuario=user, Producto_En_Carrito=Nombre_Producto).delete()
  url= "/mainshop/" + usuario
  return redirect(url, {
    'usuario': usuario,
    'database': Carrito.objects.filter(id_usuario = user)
  })

def AgregarEspecifico(request, usuario, Nombre_Producto, cantidad):
  user = get_user_model().objects.get(username=usuario)
  BDproductos = Productos.objects.get(Nombre_producto=Nombre_Producto)
  Precio_Producto = BDproductos.Precio
  Total_Parcial = cantidad * Precio_Producto
  if Carrito.objects.filter(id_usuario=user, Producto_En_Carrito = Nombre_Producto).exists():
    carrito_obj, created = Carrito.objects.update_or_create(
      id_usuario=user,
      Producto_En_Carrito=Nombre_Producto,
      defaults={
          'Cantidad': cantidad,
          'Total_Precio_Producto': Total_Parcial
      }
    )
  else:
    Carrito.objects.create(
      id_usuario=user,
      Producto_En_Carrito=Nombre_Producto,
      Cantidad=cantidad,
      Total_Precio_Producto=Total_Parcial
    )
  url = "/mainshop/" + usuario
  return redirect(url, {
    'usuario': usuario,
    'database': Carrito.objects.filter(id_usuario = user)
  })