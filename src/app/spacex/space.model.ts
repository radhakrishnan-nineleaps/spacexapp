export class Spaces {
    flight_number!: number;
    mission_name!: string;
    mission_id!: Array<string>;
    launch_year!: string;
    launch_success!: boolean;
    rocket!: rocket;
 }

 class rocket {
    first_stage!: firstStage
 }

 class firstStage {
    cores!: cores[]
 }

 class cores {
    land_success!: boolean
 }