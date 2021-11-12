import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

//criando tabela de tarefas
@Entity() export class Tarefa {

    //chave primaria
    @PrimaryGeneratedColumn()
    cod: number;

    @Column()
    nomeTarefa: string;

    @Column()
    descricao: string;

    @Column({
        default: false
    })
    finalizado: boolean;

    @CreateDateColumn()
    criado_em: Date;

    @CreateDateColumn()
    atualizado_em: Date;
}