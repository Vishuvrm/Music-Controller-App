# from xml.etree.ElementInclude import include
# from django.shortcuts import render
from rest_framework import generics

from .models import Room
from .serializers import RoomSerializer

# Create your views here.
class RoomView(generics.ListAPIView, generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

