from django.urls import path
from api.views import LoginUser, LogoutUser, ListLocations, ListWeathers, ListAllSuggestions
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("login-user", LoginUser.as_view()),
    path("logout-user", LogoutUser.as_view()),
    path("get-locations", ListLocations.as_view()),
    path("get-weathers", ListWeathers.as_view()),
    path("get-all-suggestions", ListAllSuggestions.as_view())
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
