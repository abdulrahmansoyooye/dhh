import { plainToInstance } from "class-transformer";
import { IsEnum, IsInt, IsNotEmpty, IsString, Max, Min, validateSync } from "class-validator";


enum Environment{
    Development = 'development',
    Production = 'production',
    Test = 'test'      
}
class EnvironmentVariables{
    @IsEnum(Environment)
    NODE_ENV:Environment = Environment.Development

    @IsInt()
    @Min(1)
    @Max(65535)
    POST:number = 3000

    @IsString()
    @IsNotEmpty()
    DB_USER:string;

    @IsString()
    @IsNotEmpty()
    DB_PASSWORD:string;

    @IsString()
    @IsNotEmpty()
    DB_NAME:string;

}

export function validate(config:Record<string,unknown>){
    const validated = plainToInstance(EnvironmentVariables,config,{
        enableImplicitConversion:true
    });

    const errors = validateSync(validated,{
        skipMissingProperties:false
    })
if (errors.length > 0) {
    const messages = errors.map((e)=>`${e.property}: ${Object.values(e.constraints ?? {}).join(", ")}`).join("\n")

    throw new Error(`Invalid environment vairiables:\n${messages}`)
    
}
return validated;
}