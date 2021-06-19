var datos = [

    {
        doscientos: 200,
        cantidad: 50
    },
    {
        cien: 100,
        cantidad: 50
    },
    {
        cincuenta: 50,
        cantidad: 40
    }

]

var contrasenas = [{
            password: 1234,
            saldo: 15000
        },
        {
            password: 4567,
            saldo: 20000
        },
        {
            password: 7890,
            saldo: 5000
        },
        {
            password: 1994,
            saldo: 7000
        },
        {
            password: 2021,
            saldo: 8400
        },
        {
            password:3035,
            saldo: 6500
        }
        ]


        var boton = document.getElementById("aceptar")
        var billetes_dos_disponibles = datos[0].doscientos
        var billetes_cien_disponibles = datos[1].cien
        var billetes_cincuenta_disponibles = datos[2].cincuenta

        //Boton aceptar y verificar que los radios esten seleccionados 
        function btnAceptar() {


            boton.addEventListener("click", function efectivo(e) {

                var cantidad = document.getElementById("cantidad").value

                // console.log(cantidad)
                if (document.getElementById("retirar").checked) {

                    if (cantidad != "") {



                        if (cantidad > 7000) {

                            alert("Lo sentimos el limite a retirar es de $7000 por dia ")

                            //if para los valores apres
                        } else if (cantidad % 200 == 0) {

                            let billetes_dos = cantidad / 200
                            let operacion_dos = billetes_dos / 2
                            let total_dos = operacion_dos * datos[0].doscientos
                            billetes_dos_disponibles = billetes_dos_disponibles - operacion_dos

                            let total_cien = operacion_dos * datos[1].cien
                            billetes_cien_disponibles = billetes_cien_disponibles - operacion_dos

                            let total_cinc = billetes_dos * datos[2].cincuenta
                            billetes_cincuenta_disponibles = billetes_cincuenta_disponibles - billetes_dos

                            let total = total_dos + total_cien + total_cinc

                            if (billetes_dos_disponibles > 0 && billetes_cien_disponibles > 0 && billetes_cincuenta_disponibles > 0) {

                                console.log(total)
                                document.getElementById("lbl_datos").innerText = "Se te daran " + parseInt(operacion_dos) + " billetes de $200,  " + parseInt(operacion_dos) + " billetes de $100 y " + billetes_dos + " billetes de $50"
                            } else {
                                alert("El cajero ya no tiene billetes disponibles")
                            }



                            // if para los valores nones
                        } else if (cantidad % 100 == 0) {


                            var billetes_dos = cantidad / 100
                            var parseo_dos = parseInt(billetes_dos) / 3
                            var total_dos = parseInt(parseo_dos) * datos[0].doscientos
                            billetes_dos_disponibles = billetes_dos_disponibles - parseo_dos

                            var total_cien = parseInt(parseo_dos) * datos[1].cien
                            billetes_cien_disponibles = billetes_cien_disponibles - parseo_dos

                            var total_cantidad = total_dos + total_cien

                            if (cantidad == total_cantidad) {

                                document.getElementById("lbl_datos").innerText = "Se te daran " + parseo_dos + " billetes de $200, " + parseo_dos + " billetes de $100 y 0 billetes de $50"

                            } else {

                                let total_cin = 4 * datos[2].cincuenta
                                total_cantidad = total_dos + total_cien + total_cin
                                billetes_cincuenta_disponibles = billetes_cincuenta_disponibles - 4

                                document.getElementById("lbl_datos").innerText = "Se te daran " + parseInt(parseo_dos) + " billetes de $200, " + parseInt(parseo_dos) + " billetes de $100 y 4 billetes de $50"

                            }
                        }
                    } else {

                        alert("Ingresa una cantidad")
                    }

                    //Consultamos saldo
                } else if (document.getElementById("consultar").checked) {

                    var contra = prompt("ingresa tu NIP ")


                    for(var i = 0; i < contrasenas.length; i++){

                        if (contra == contrasenas[i].password) {
                            
                            document.getElementById("lbl_datos").innerText = "Tu saldo es de: $ " + contrasenas[i].saldo
                        }
                    }
                } else {
                    alert("Seleccione una opcion: Retirar o Consultar")
                }

            })

        }

        btnAceptar();


        //Funcion cancelar
        function cancelar() {

            //al momento de precionar el boton cancelar se borrara todo
            var cancelar = document.getElementById("cancelar")

            cancelar.addEventListener('click', function (event) {

                document.getElementById("lbl_datos").innerHTML = " "

            })
        }

        cancelar();


