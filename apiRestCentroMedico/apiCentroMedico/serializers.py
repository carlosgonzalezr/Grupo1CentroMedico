from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Paciente

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']

class PacienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paciente
        fields = ['correo', 'nombre', 'apellido', 'password', 'repeatPassword', 'direccion', 'celular', 'enfermedades', 'alergias', 'sexo']