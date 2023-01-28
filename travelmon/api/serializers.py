from rest_framework import serializers
from .models import Weather, Location, Suggestion
from django.forms.models import model_to_dict
import json


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = ("name", )


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ("name", )


class SuggestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Suggestion
        fields = ("all_suggestions", )

    def serialize(self, model):
        dict_obj = model_to_dict(model)
        serialized = json.dumps(dict_obj)
        return serialized
