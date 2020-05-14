const DGApi = require('../dist/types/Client');

(async () => {
  const dgApi = new DGApi.Client({
    apiKey: 'rurbbn3446', // ваш ключ API
    ridKey: 'baf4c54e9dae', // ключ для отправки запросов
    appVersion: '2020-05-13-08', // версия клиента
  });

  const itemsResult = await dgApi.getItems({
    region_id: 32, // ID региона, в данном случае Москва
    rubric_id: [207, 350], // массив ID рубрик, в данном случае аптеки и супермаркеты
    fields: Object.values(DGApi.ItemField), // получаемые поля, в данном случае все
    page: 1,
    page_size: 10,
  });

  itemsResult.items.forEach(item => {
    if (!('address' in item)) return;

    const address = item.address;
    if (!('components' in address)) return;

    const addressComponents = address.components;

    const streetNumbers = addressComponents
      .filter(address => address.type === 'street_number')
      .map(address => `${address.street} ${address.number}`);

    // выводим адреса первых 10 найденных объектов
    console.log(streetNumbers.join(' | '));
  });
})();
