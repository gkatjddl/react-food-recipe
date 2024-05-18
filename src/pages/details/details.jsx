import { useParams } from 'react-router-dom';
import './details.css';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/context';

export default function Details()
{
    const {id} = useParams();
    const {foodDetailData, setFoodDetailData, favoritesList, handleAddToFavorite} = useContext(GlobalContext);

    useEffect(()=>{
        async function getFoodDetail(){
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await res.json();

            console.log(data);
            if(data?.data){
                setFoodDetailData(data?.data);
            }
        }

        getFoodDetail();
    }, [])

    return(
        <div className='details-container'>
            <div className='img-container'>
                <div className='img-wrapper'>
                    <img src={foodDetailData?.recipe?.image_url} className='img-style'/>
                </div>
            </div>
            
            <div className='content-container'>
                <span className='text-publisher'>{foodDetailData?.recipe?.publisher}</span>
                <h3 className='text-title'>{foodDetailData?.recipe?.title}</h3>
                <div>
                    <button className='favorites-btn' onClick={()=>{handleAddToFavorite(foodDetailData?.recipe)}}>
                        {
                            favoritesList && favoritesList.length > 0 && favoritesList.findIndex(item=>item.id === foodDetailData.recipe?.id) !== -1 ? '즐겨찾기에서 제거' : '즐겨찾기에 추가'
                        }
                    </button>
                </div>
                <div>
                    <span className='recipe-title'>재료:</span>
                    <ul className='recipe-content'>
                        {
                            foodDetailData?.recipe?.ingredients.map((ingredient, idx)=>{
                                return(
                                    <li key={idx}>
                                        <span>{ingredient.quantity} {ingredient.unit}</span>
                                        <span>{ingredient.description}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}