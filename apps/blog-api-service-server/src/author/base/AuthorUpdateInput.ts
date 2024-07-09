/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { BlogPostUpdateManyWithoutAuthorsInput } from "./BlogPostUpdateManyWithoutAuthorsInput";
import { Type } from "class-transformer";

@InputType()
class AuthorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => BlogPostUpdateManyWithoutAuthorsInput,
  })
  @ValidateNested()
  @Type(() => BlogPostUpdateManyWithoutAuthorsInput)
  @IsOptional()
  @Field(() => BlogPostUpdateManyWithoutAuthorsInput, {
    nullable: true,
  })
  blogPosts?: BlogPostUpdateManyWithoutAuthorsInput;
}

export { AuthorUpdateInput as AuthorUpdateInput };
