import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import CardHeader from '@mui/material/CardHeader';
import { Navigation } from 'swiper/modules';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

const CardSlick = ({ reviews }) => {
    const getRandomColor = () => {
        const colors = ['#E23A3A', '#2F46E5', 'green', 'purple', 'orange', '#1BAAAF'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <div className="CardSlick">
            <Swiper navigation={true} modules={[Navigation]} slidesPerView={3} spaceBetween={16} className="mySwiper">
                {reviews?.map((review, index) => (
                    <SwiperSlide key={index}>
                        <CardHeader 
                            avatar={
                                <Avatar sx={{ bgcolor: getRandomColor() }} aria-label="recipe">
                                    {review.fullName[0]}
                                </Avatar>
                            }
                            title={<Typography className="text-lg font-semibold">{review.fullName}</Typography>}
                            subheader={<Typography className="text-sm text-gray-500">{review.reviewDate}</Typography>}
                        />
                        <div className="card-content p-4">
                            <h5 className="CardSlick-desrcibe text-base text-gray-700 mb-2">{review.content}</h5>
                            <Button size="small" className="text-blue-500 hover:bg-blue-100">Đọc thêm</Button>
                        </div>
                        <div className="flex justify-between items-center p-4">
                            <span className="card-rating text-xl text-yellow-500">{review.rating}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default CardSlick;
