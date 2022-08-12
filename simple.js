const shops =[{name:'alhaj', Roll:'25', skin:'samla', vij:'trash'},
{name:'sarkar', Roll:'22', skin:'sala sli tui bonsh', vij:'tash'},
{name:'sujon', Roll:'15', skin:'sama sli ami tro tui', vij:'tarsh'},
{name:'haji', Roll:'5', skin:'salka tui shat', vij:'tarah'}];

function dokan(shops, search){
    const marker =[];
    for(const shop of shops){
        if(shop.skin.toLowerCase().includes(search.toLowerCase())){
            marker.push(shop);
        }
    }
    return marker;
    
}
 const result = dokan(shops,'tui');
 console.log(result);