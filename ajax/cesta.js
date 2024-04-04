$(function () {

    $.ajax({
        url: "php/pedido-produto.php",
        type: "GET",
        success: function (response) {
            const itensPedido = JSON.parse(response);
            console.log(itensPedido)
            let template = ``
            let vlTotal = 0
            let totalItens = itensPedido.length
            itensPedido.forEach(item => {
                template += `
                        <tr>
                            <td>${item.id_produto}</td>
                            <td>${item.ds_nome}</td>
                            <td>${item.vl_unitario}</td>
                        </tr>
                    `
                vlTotal += parseFloat(item.vl_unitario)
            })

        }
    })
})