<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th>
          <span class="underline cursor-pointer" 
            >Ranking</span
          >
        </th>
        <th>Nombre</th>
        <th>
          <span class="underline cursor-pointer" 
            >Precio</span
          >
        </th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"            
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100">
        <td>          
        </td>
        <td>
          
        </td>
        <td>
          
          <small class="ml-1 text-gray-500"></small>
        </td>
        <td></td>
        <td></td>
        <td>
          
        </td>
        <td class="hidden sm:block">          
            <span>Detalle</span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'PxAssetsTable',

  components: {  }, 
}

</script>

