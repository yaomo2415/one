from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Create your views here.

class TestClass(APIView):
    def get(self, request):
        return Response(status=status.HTTP_200_OK, data={'msg': 'get'})

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if username == '123123' and password == '123123':
            return Response(status=status.HTTP_200_OK, data={'token': 'ofhafhHDfahfeliehfwOIUGIRWugrw'})
        return Response(status=status.HTTP_400_BAD_REQUEST, data={'msg': 'error'})
