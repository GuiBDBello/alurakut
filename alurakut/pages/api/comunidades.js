import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

    if(request.method === 'POST') {
        const TOKEN = '92b0d72f7b79631e209c95a45befca';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "972793",
            ...request.body,
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/GuiBDBello.png",
            // creatorSlug: "GuiBDBello"
        });

        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        });
        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nada no GET, mas no POST tem!'
    })
}