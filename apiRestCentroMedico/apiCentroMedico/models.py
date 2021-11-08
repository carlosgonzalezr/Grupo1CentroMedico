from django.db import models

# Create your models here.
class Paciente(models.Model):
    correo = models.CharField(primary_key=True, max_length=50, verbose_name='Correo de Usuario')
    nombre = models.CharField(max_length=25, verbose_name='Nombre de Usuario')
    apellido = models.CharField(max_length=25, verbose_name='Apellido de Usuario')
    password = models.CharField(max_length=12, verbose_name='Contraseña')
    repeatPassword = models.CharField(max_length=12, verbose_name='Repetir Contraseña')
    direccion = models.TextField(max_length=255, verbose_name='Dirección')
    celular = models.IntegerField(verbose_name="Celular")
    enfermedades = models.TextField(max_length=255, verbose_name='Enfermedades')
    alergias = models.TextField(max_length=255, verbose_name='Alergias')
    sexo = models.CharField(max_length=15, verbose_name='Sexo')

    def __str__(self):
        return self.correo