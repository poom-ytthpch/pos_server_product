import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginInlineTraceDisabled } from 'apollo-server-core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ConfigModule.forRoot({
      envFilePath: ['.config.env'],
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      typePaths: ['./**/*.graphql'],
      // autoSchemaFile: true,
      introspection: true,
      debug: false,
      playground: false,
      // csrfPrevention: true,
      cache: "bounded",
      plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ApolloServerPluginInlineTraceDisabled()
      ],
      cors: {
        origin: ["https://sandbox.embed.apollographql.com", "http://localhost:3000"]
      },
      context: ({ request , req }) => ({
        
        request: request || req,
        customHeaders: {
          headers: {
            ...request.headers,
          },
        }
      })
      // context:({req}) => {console.log(req)}
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
