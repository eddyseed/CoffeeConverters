username=['krishnav','nandini','taylor']
password=[]
i=0
while i<len(username):
    username_prompt=str(input("enter your username: "))
    if username_prompt in username:
        print("user already exists")
    else:
        print("password must contain 4 letters or numbers")
        password_prompt=str(input("create your password"))
        if len(password_prompt)>=4:
            print(username_prompt , password_prompt)
            break

# def authentication():
#     username_prompt=str(input("enter your username: "))
#     for i in username :
#         if i==username_prompt:
#             print("user already exists")
#         else:
#              print(username_prompt)
#              break 
#     while True:
#         print("password must contain atleast 4 characters and numbers")
#         password_prompt=str(input("create your password: "))
#         if len(password_prompt)>=4:
#                 print(username_prompt , password_prompt)
#                 break

# authentication()