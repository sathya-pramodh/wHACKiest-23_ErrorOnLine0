from rest_framework import serializers
from .models import Weather, Location


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = ("name", )


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ("name", )
