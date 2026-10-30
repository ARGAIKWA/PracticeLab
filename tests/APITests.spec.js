const { test , expect }= require('@playwright/test');

var userid;

test("Get users" , async ({request}) =>{
        const response=await request.get("https://reqres.in/api/users?page=2");
        console.log(await response.json());
        expect(response.status()).toBe(200)

});

test("create user", async ({request}) =>{

        const response=await request.post('https://reqres.in/api/users',
                                    {
                                    data:{

                                        "name":"Palash",
                                        "job":"React Developer"
                                    },
                                    headers:{
                                        "Accept":"application/json"
                                    }
                                    });
        console.log(await response.json())
        expect(response.status()).toBe(201)

        var res=await response.json()
        userid=res.id
})

test("update user",async({request})=>{
        const response=await request.put('https://reqres.in/api/users/'+userid,
        {
                                    data:{

                                        "name":"Palash",
                                        "job":"Full stack Developer"
                                    },
                                    headers:{
                                        "Accept":"application/json"
                                    }
        });
        console.log(await response.json())
        expect(response.status()).toBe(200)

        var res=await response.json()
        userid=res.id
})

test("delete user" , async({request})=>{
    const response=await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)


}
)
