export const mmfields = {
  content: {
    sku: {
      id: 1,
      type: 'string',
      name: 'sku',
      label: 'SKU',
      description: 'The product identification number.Must be unique.',
      range: '-',
      is_required: true,
    },
    sku_manufacturer: {
      id: 2,
      type: 'string',
      name: 'sku_manufacturer',
      label: 'Manufacturer SKU',
      description:
        'Manufacturer sku for the product. Must be unique. It is mandatory if no EAN is mentionned.',
      range: '-',
      is_required: true,
    },
    manufacturer: {
      id: 3,
      type: 'string',
      name: 'manufacturer',
      label: 'Manufacturer',
      description: 'Enter the manufacturer s name.',
      range: '-',
      is_required: true,
    },
    ean: {
      id: 4,
      type: 'string',
      name: 'ean',
      label: 'EAN',
      description:
        'International product code. Must be unique. It is mandatory if no sku manufacturer is mentionned.',
      range: '-',
      is_required: true,
    },
    title: {
      id: 5,
      type: 'string',
      name: 'title',
      label: 'Title',
      description:
        'Title on ManoMano. Should be unique by indicating the singularities of product.',
      range: '-',
      is_required: true,
    },
    description: {
      id: 6,
      type: 'string',
      name: 'description',
      label: 'Description',
      description:
        'Appears on ManoMano information sheet. Must be in html format or be formatted within the cell.',
      range: '-',
      is_required: true,
    },
    product_price_vat_inc: {
      id: 7,
      type: 'money',
      name: 'product_price_vat_inc',
      label: 'Product Price (vat included)',
      description:
        'Product price. Must follow agreement. Must include VAT. No separator for thousands to be used: only a . or a , to indicate a decimal point.',
      range: '-',
      is_required: true,
    },
    shipping_price_vat_inc: {
      id: 8,
      type: 'money',
      name: 'shipping_price_vat_inc',
      label: 'Shipping Price (vat included)',
      description: 'Shipping price. Must follow agreement. Must include VAT.',
      range: '-',
      is_required: true,
    },
    quantity: {
      id: 9,
      type: 'float',
      name: 'quantity',
      label: 'Quantity',
      description: 'Stock levels. Must be a number',
      range: '-',
      is_required: true,
    },
    brand: {
      id: 10,
      type: 'string',
      name: 'brand',
      label: 'Brand',
      description: 'Indicate the brand of the product here.',
      range: '-',
      is_required: true,
    },
    merchant_category: {
      id: 11,
      type: 'string',
      name: 'merchant_category',
      label: 'Category',
      description: 'The product breadcrumb trail on your website.',
      range: '-',
      is_required: true,
    },
    product_url: {
      id: 12,
      type: 'string',
      name: 'product_url',
      label: 'Product Url',
      description:
        'The url of the product on your website or your best selling channel.',
      range: '-',
      is_required: false,
    },
    image_1: {
      id: 13,
      type: 'string',
      name: 'image_1',
      label: 'Image 1',
      description:
        'The url of the main image displayed on ManoMano for the product. The image must comply with some rules to be visible on all sale channels.',
      range: '-',
      is_required: true,
    },
    image_2: {
      id: 14,
      type: 'string',
      name: 'image_2',
      label: 'Image 2',
      description: 'image url',
      range: '-',
      is_required: false,
    },
    image_3: {
      id: 15,
      type: 'string',
      name: 'image_3',
      label: 'Image 3',
      description: 'image url',
      range: '-',
      is_required: false,
    },
    image_4: {
      id: 16,
      type: 'string',
      name: 'image_4',
      label: 'Image 4',
      description: 'image url',
      range: '-',
      is_required: false,
    },
    image_5: {
      id: 17,
      type: 'string',
      name: 'image_5',
      label: 'Image 5',
      description: 'image url',
      range: '-',
      is_required: false,
    },
    retail_price_vat_inc: {
      id: 18,
      type: 'money',
      name: 'retail_price_vat_inc',
      label: 'Retail Price (vat included)',
      description: 'Indicate the product retail price (RRP).Must include VAT.',
      range: '-',
      is_required: false,
    },
    product_vat_rate: {
      id: 19,
      type: 'float',
      name: 'product_vat_rate',
      label: 'Product VAT rate',
      description: '-',
      range: '-',
      is_required: false,
    },
    shipping_vat_rate: {
      id: 20,
      type: 'float',
      name: 'shipping_vat_rate',
      label: 'Shipping VAT rate',
      description: '-',
      range: '-',
      is_required: false,
    },
    manufacturer_pdf: {
      id: 21,
      type: 'string',
      name: 'manufacturer_pdf',
      label: 'Manufacturer pdf',
      description:
        'The url for the product pdf. Must be in the correct language. (or in all languages)',
      range: '-',
      is_required: false,
    },
    ParentSKU: {
      id: 22,
      type: 'string',
      name: 'ParentSKU',
      label: 'Parent SKU',
      description:
        'A common identification to all products needing to be grouped together. Must differentiate from the SKU. The seperate SKUs can be selected through a drop down box.',
      range: '-',
      is_required: false,
    },
    parent_title: {
      id: 23,
      type: 'string',
      name: 'parent_title',
      label: 'Parent Title',
      description:
        'Parent title for child SKUs grouped using the field "ParentSKU". Must be completed if the "ParentSKU" field is used.',
      range: '-',
      is_required: false,
    },
    Cross_Sell_SKU: {
      id: 24,
      type: 'string',
      name: 'Cross_Sell_SKU',
      label: 'Cross Sell SKU',
      description: 'List complementary product SKUs separated by #.',
      range: '-',
      is_required: false,
    },
    ManufacturerWarrantyTime: {
      id: 25,
      type: 'int',
      name: 'ManufacturerWarrantyTime',
      label: 'Manufacturer Warranty Time',
      description:
        'One number only. Indicates the duration of the manufacturers warranty in years.',
      range: '-',
      is_required: false,
    },
    carrier: {
      id: 26,
      type: 'string',
      name: 'carrier',
      label: 'Carrier',
      description: 'The carrier name for flat shipping rate',
      range: '-',
      is_required: true,
    },
    shipping_time: {
      id: 27,
      type: 'string',
      name: 'shipping_time',
      label: 'Shipping Time',
      description:
        'The shipping time for flat shipping rate in number of days. Must be an number or a range separated by  #. (1 to 3 days => 1#3)',
      range: '-',
      is_required: true,
    },
    use_grid: {
      id: 28,
      type: 'int',
      name: 'use_grid',
      label: 'Use Shipping Grid',
      description:
        'If to be used, enter 1. This activates the transport matrix.',
      range: '-',
      is_required: true,
    },
    carrier_grid_1: {
      id: 29,
      type: 'string',
      name: 'carrier_grid_1',
      label: 'Grid Carrier 1',
      description: 'The name of the carrier in the first grid.',
      range: '-',
      is_required: true,
    },
    shipping_time_carrier_grid_1: {
      id: 30,
      type: 'string',
      name: 'shipping_time_carrier_grid_1',
      label: 'Shipping Time Carrier 1',
      description: 'Shipping time for matrix. Number or range seperated by #.',
      range: '-',
      is_required: true,
    },
    DisplayWeight: {
      id: 31,
      type: 'float',
      name: 'DisplayWeight',
      label: 'Weight',
      description: 'Weight, including primary packing, in kg.',
      range: '-',
      is_required: true,
    },
    carrier_grid_2: {
      id: 32,
      type: 'string',
      name: 'carrier_grid_2',
      label: 'Grid Carrier 2',
      description: 'The name of the carrier in the first grid.',
      range: '-',
      is_required: false,
    },
    shipping_time_carrier_grid_2: {
      id: 33,
      type: 'string',
      name: 'shipping_time_carrier_grid_2',
      label: 'Shipping Time Carrier 2',
      description: 'Shipping time for matrix. Number or range seperated by #.',
      range: '-',
      is_required: false,
    },
    carrier_grid_3: {
      id: 34,
      type: 'string',
      name: 'carrier_grid_3',
      label: 'Grid Carrier 3',
      description: 'The name of the carrier in the first grid.',
      range: '-',
      is_required: false,
    },
    shipping_time_carrier_grid_3: {
      id: 35,
      type: 'string',
      name: 'shipping_time_carrier_grid_3',
      label: 'Shipping Time Carrier 3',
      description: 'Shipping time for matrix. Number or range seperated by #.',
      range: '-',
      is_required: false,
    },
    carrier_grid_4: {
      id: 36,
      type: 'string',
      name: 'carrier_grid_4',
      label: 'Grid Carrier 4',
      description: 'The name of the carrier in the first grid.',
      range: '-',
      is_required: false,
    },
    shipping_time_carrier_grid_4: {
      id: 37,
      type: 'string',
      name: 'shipping_time_carrier_grid_4',
      label: 'Shipping Time Carrier 4',
      description: 'Shipping time for matrix. Number or range seperated by #.',
      range: '-',
      is_required: false,
    },
    free_return: {
      id: 38,
      type: 'int',
      name: 'free_return',
      label: 'Free return',
      description: '1 = product on which you offer a free return.',
      range: '-',
      is_required: false,
    },
    min_quantity: {
      id: 39,
      type: 'int',
      name: 'min_quantity',
      label: 'Min order quantity',
      description:
        'To be added (integer) if there is a minimum quantity required to purchase the item.',
      range: '-',
      is_required: false,
    },
    increment: {
      id: 40,
      type: 'string',
      name: 'increment',
      label: 'Increment',
      description: 'Minimum additional quantity.',
      range: '-',
      is_required: false,
    },
    sales: {
      id: 41,
      type: 'int',
      name: 'sales',
      label: 'Is on Sales',
      description: '',
      range: '-',
      is_required: false,
    },
    eco_participation: {
      id: 42,
      type: 'string',
      name: 'eco_participation',
      label: 'Eco Participation',
      description:
        'Eco contribution included in the product price inc. VAT. For products sold to France only.',
      range: '-',
      is_required: false,
    },
    Price_per_m2_vat_inc: {
      id: 43,
      type: 'money',
      name: 'Price_per_m2_vat_inc',
      label: 'Price per m2 (vat_included)',
      description: 'Product price per m2.(ex: tiling) Must include VAT.',
      range: '-',
      is_required: false,
    },
    shipping_price_supplement_vat_inc: {
      id: 44,
      type: 'money',
      name: 'shipping_price_supplement_vat_inc',
      label: 'Shipping Price supplement (vat included)',
      description:
        'Shipping price if added to a kart already containing an item from your catalogue.',
      range: '-',
      is_required: false,
    },
    feature_1: {
      id: 45,
      type: 'string',
      name: 'feature_1',
      label: 'Feature 1',
      description:
        'Undefined role. Our developers can adapt its function to your needs if it is really necessary.',
      range: '-',
      is_required: false,
    },
    Color: {
      id: 46,
      type: 'string',
      name: 'Color',
      label: 'Color',
      description: 'Color',
      range: '-',
      is_required: false,
    },
    special_price_type: {
      id: 47,
      type: 'string',
      name: 'special_price_type',
      label: 'Special Price type',
      description: '-',
      range: '-',
      is_required: false,
    },
    Sample_SKU: {
      id: 48,
      type: 'string',
      name: 'Sample_SKU',
      label: 'Sample SKU',
      description: '-',
      range: '-',
      is_required: false,
    },
    Style: {
      id: 49,
      type: 'string',
      name: 'Style',
      label: 'Style',
      description: '-',
      range: '-',
      is_required: false,
    },
    Unit_count: {
      id: 50,
      type: 'float',
      name: 'Unit_count',
      label: 'Unit count',
      description:
        'Unit count per unit pricing. You need to write the number of unit for the product. (Mandatory for ManoMano.de)',
      range: '-',
      is_required: false,
    },
    Unit_count_type: {
      id: 51,
      type: 'string',
      name: 'Unit_count_type',
      label: 'Unit count type',
      description:
        'Unit of measure per unit pricing. You need to choose the right value among the list: kg / cubic meter / liter / meter / square meter /  roller / piece. (Mandatory for ManoMano.de)',
      range: '-',
      is_required: false,
    },
    is_mmf: {
      id: 52,
      type: 'boolean',
      name: 'is_mmf',
      label: 'Is MMF',
      description: 'If the product has to be managed by MMF = 1.',
      range: '-',
      is_required: false,
    },
    weight_net: {
      id: 53,
      type: 'float',
      name: 'weight_net',
      label: 'Weight net',
      description:
        'Net weight in kg of dangerous materials (= display weight if not dangerous).',
      range: '-',
      is_required: false,
    },
    icpe: {
      id: 54,
      type: 'string',
      name: 'icpe',
      label: 'ICPE',
      description:
        'Registered environmental facility, identification of class of danger.',
      range: '-',
      is_required: false,
    },
    onu: {
      id: 55,
      type: 'string',
      name: 'onu',
      label: 'ONU',
      description: 'Identification of merchandise with regulated transport.',
      range: '-',
      is_required: false,
    },
    security_file_number: {
      id: 56,
      type: 'string',
      name: 'security_file_number',
      label: 'Security file number',
      description: 'Safety Data Sheet number.',
      range: '-',
      is_required: false,
    },
    has_batch_number: {
      id: 57,
      type: 'boolean',
      name: 'has_batch_number',
      label: 'Has batch number',
      description: 'If the product has a batch number which must be noted = 1.',
      range: '-',
      is_required: false,
    },
    has_serial_number: {
      id: 58,
      type: 'boolean',
      name: 'has_serial_number',
      label: 'Has serial number',
      description:
        'If the product has a serial number which must be noted = 1.',
      range: '-',
      is_required: false,
    },
    has_dluo: {
      id: 59,
      type: 'boolean',
      name: 'has_dluo',
      label: 'Has dluo',
      description: 'If the product has a use-by date which must be noted = 1.',
      range: '-',
      is_required: false,
    },
    is_fragile: {
      id: 60,
      type: 'boolean',
      name: 'is_fragile',
      label: 'Is fragile',
      description:
        'If the product is fragile and requires special precautions = 1.',
      range: '-',
      is_required: false,
    },
    is_overpackaged: {
      id: 61,
      type: 'boolean',
      name: 'is_overpackaged',
      label: 'Is overpackaged',
      description: 'If the product requires additional packaging = 1.',
      range: '-',
      is_required: false,
    },
    overpackage_instruction: {
      id: 62,
      type: 'text',
      name: 'overpackage_instruction',
      label: 'Overpackage instruction',
      description: 'Explanation of the overpackaging required.',
      range: '-',
      is_required: false,
    },
    DisplayHeight: {
      id: 63,
      type: 'float',
      name: 'DisplayHeight',
      label: 'Height',
      description: 'Height in cm.',
      range: '-',
      is_required: false,
    },
    DisplayWidth: {
      id: 64,
      type: 'float',
      name: 'DisplayWidth',
      label: 'Width',
      description: 'Width in cm.',
      range: '-',
      is_required: false,
    },
    DisplayDepth: {
      id: 65,
      type: 'float',
      name: 'DisplayDepth',
      label: 'Depth',
      description: 'Depth in cm.',
      range: '-',
      is_required: false,
    },
    carrier_grid_5: {
      id: 66,
      type: 'string',
      name: 'carrier_grid_5',
      label: 'Grid Carrier 5',
      description: 'The name of the carrier in the fifth grid.',
      range: '-',
      is_required: false,
    },
    shipping_time_carrier_grid_5: {
      id: 67,
      type: 'string',
      name: 'shipping_time_carrier_grid_5',
      label: 'Shipping Time Carrier 5',
      description: 'Shipping time for matrix. Number or range seperated by #.',
      range: '-',
      is_required: false,
    },
    carrier_grid_6: {
      id: 68,
      type: 'string',
      name: 'carrier_grid_6',
      label: 'Grid Carrier 6',
      description: 'The name of the carrier in the sixth grid.',
      range: '-',
      is_required: false,
    },
    shipping_time_carrier_grid_6: {
      id: 69,
      type: 'string',
      name: 'shipping_time_carrier_grid_6',
      label: 'Shipping Time Carrier 6',
      description: 'Shipping time for matrix. Number or range seperated by #.',
      range: '-',
      is_required: false,
    },
    eu_energy_efficiency_class: {
      id: 73,
      type: 'string',
      name: 'eu_energy_efficiency_class',
      label: 'Energy efficiency class',
      description: 'To collect the efficiency of the product.',
      range: '-',
      is_required: false,
    },
    eu_energy_efficiency_class_min: {
      id: 74,
      type: 'string',
      name: 'eu_energy_efficiency_class_min',
      label: 'Energy efficiency class min',
      description:
        'First value of the range of the energy efficiency of the product.',
      range: '-',
      is_required: false,
    },
    eu_energy_efficiency_class_max: {
      id: 75,
      type: 'string',
      name: 'eu_energy_efficiency_class_max',
      label: 'Energy efficiency class max',
      description:
        'Second value of the range of the energy efficiency of the product.',
      range: '-',
      is_required: false,
    },
    eu_energy_efficiency_image_url: {
      id: 76,
      type: 'string',
      name: 'eu_energy_efficiency_image_url',
      label: 'Energy efficiency image URL',
      description: 'To collect the energy label image url of the product. ',
      range: '-',
      is_required: false,
    },
    repairability_index: {
      id: 77,
      type: 'float',
      name: 'repairability_index',
      label: 'Repairability index',
      description:
        'The repairability rating is on a scale of 1 to 10, with 10 indicating the devices with the best repairability.',
      range: '-',
      is_required: false,
    },
  },
};
