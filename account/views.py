from rest_framework import status
from rest_framework.response import Response
from .models import User
from account.renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from .serializers import *
from rest_framework.views import APIView
# Generate Token
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),

    }
class UserRegistrationView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token':token,'id':user.id,'isadmin':user.is_admin,'msg': 'User is Successfully registered'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request, format=None):
        msg = "hello"
        return Response(msg)



class UserLoginView(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email= email, password= password)

            if user is not None:
                # print("Hello")
                token = get_tokens_for_user(user)
                return Response({'token':token,'id':user.id,'isadmin':user.is_admin,'msg': 'User Login Successfully '}, status=status.HTTP_200_OK)

            else:
                return Response({'errors':{'non_field_errors':['Email or Password is not valid']}}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_200_OK)




class UserProfileView(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def get(self,request, format = None):
        serializer = UserProfileSerializer(request.user)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserChangePassword(APIView):
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated]
    def post(self,request, format = None):
        
        serializer = UserChangePasswordSerializer(data = request.data,context={'user':request.user})
        if serializer.is_valid(raise_exception=True):
            return Response({'msg':"Password change Successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        