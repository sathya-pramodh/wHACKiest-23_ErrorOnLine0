from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from django.contrib.auth import login, logout, authenticate
from .models import User, Weather, Location
from .serializers import WeatherSerializer, LocationSerializer


class LoginUser(APIView):
    def post(self, request, format=None):
        if request.user.is_authenticated:
            return Response({}, status=status.HTTP_200_OK)
        email = request.data.get('email')
        username = request.data.get('username')
        password = request.data.get('password')
        if not email or not password or not username:
            return Response({"Bad request": "Invalid data"}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=username, email=email, password=password)
        if user:
            login(request, user)
            return Response({}, status=status.HTTP_200_OK)
        user = User.objects.create_user(
            email=email, username=username, password=password)
        if not user:
            print("Something went wrong.")
        login(request, user)
        return Response({"Unauthorized": "Invalid username, password or email"}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutUser(APIView):
    def post(self, request, format=None):
        logout(request)
        return Response({}, status=status.HTTP_200_OK)


class ListLocations(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer


class ListWeathers(generics.ListAPIView):
    queryset = Weather.objects.all()
    seralizer_class = WeatherSerializer
