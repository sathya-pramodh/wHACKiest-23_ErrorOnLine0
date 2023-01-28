from django.contrib import admin
from .models import User, Weather, Location

admin.site.register(User)
admin.site.register(Weather)
admin.site.register(Location)
