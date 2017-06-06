window.addEventListener("load",function (e)
{
    var btn1= document.querySelector(".btn1");
    var btn2=document.querySelector(".btn2");
    var div1 = document.querySelector(".div1");
    var div2 = document.querySelector(".div2");
    var form1 = document.forms.form1;
    var form2 = document.forms.form2;
    var error = "0 0 5px 2px red";
    for (var i = 0; i < form1.elements.length; i++)
    {
        var curr = form1.elements[i];
        curr.addEventListener("invalid", function (e)
        {
            if (this.willValidate && !this.validity.valid)
            {
                this.style.boxShadow=error;
            }
        });
    }
    for (var i = 0; i < form2.elements.length; i++)
{
    var curr = form2.elements[i];
    curr.addEventListener("invalid", function (e)
    {
        if (this.willValidate && !this.validity.valid)
        {
            this.style.boxShadow=error;
        }
    });
}

    form1.addEventListener("submit",function (e)
    {
        e.preventDefault();
        if (!this.checkValidity())
        {
            errorShadowContent();
        }
        else
        {
            document.querySelector(".content").style.boxShadow ="";
        }
        for (var i = 0; i < form1.elements.length; i++)
        {

            if(form1.elements[i].validity.valid)
            {
                form1.elements[i].style.boxShadow="";
            }
        }
    });
    form2.addEventListener("submit", function (e)
    {
        e.preventDefault();
        if (!this.checkValidity())
        {
            errorShadowContent();
        }
        else
        {
            document.querySelector(".content").style.boxShadow ="";
        }
        for (var i = 0; i < form2.elements.length; i++)
        {

            if(form2.elements[i].validity.valid)
            {
                form2.elements[i].style.boxShadow="";
            }
        }
        prov_adress(form2.elements);
    });

    btn1.addEventListener("click",function (e)
    {
       div2.style.display="none";
       div1.style.display="block";
       btn2.className="btn";
       btn1.className="btn btn-success";
       document.querySelector(".content").style.boxShadow ="";
       for (var i = 0; i < form1.elements.length; i++)
       {
           form1.elements[i].style.boxShadow="";
       }
    });
    btn2.addEventListener("click",function (e)
    {
        div1.style.display="none";
        div2.style.display="block";
        btn1.className="btn";
        btn2.className="btn btn-success";
        document.querySelector(".content").style.boxShadow ="";
        for (var i = 0; i < form2.elements.length; i++)
        {
            form2.elements[i].style.boxShadow="";
        }
    });

    function prov_adress(obj)
    {
        var adr = obj.mail.value;

        var adr_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;

        var prov = adr_pattern.test(adr);

        if (prov)
        {
            document.getElementById("mail").style.boxShadow = "";
            document.querySelector(".content").style.boxShadow  ="";
        }
        else
        {
            errorShadowContent();
            document.getElementById("mail").style.boxShadow = error;
        }
    }
    function errorShadowContent()
    {
        document.querySelector(".content").style.boxShadow  = error;
    }
});