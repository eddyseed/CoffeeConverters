username=[]
password=[]
i=0
while True:
    username_prompt=str(input("enter your username: "))
    if username_prompt in username:
        print("user already exists")
    else:
        print("password must contain 4 letters or numbers")
        password_prompt=str(input("create your password"))
        if len(password_prompt)>=4:
            print(username_prompt , password_prompt)
            break
username.append(username_prompt)
password.append(password_prompt)
print(username)
print(password)
