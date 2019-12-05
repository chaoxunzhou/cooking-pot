"""
homepage/views.py
"""
# from django.contrib.auth.models import User
from django.shortcuts import render # STEP 1 - Import
from django.shortcuts import redirect


def index_page(request):

    return render(request, "homepage/index.html", {})
