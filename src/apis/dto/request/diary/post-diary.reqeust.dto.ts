import { Feeling, Weather } from "src/types/aliases";

// interface: post diary request body Dto //
export default interface PostDiaryRequestDto {
    weather: Weather;
    feeling: Feeling;
    title: string;
    content: string;
}