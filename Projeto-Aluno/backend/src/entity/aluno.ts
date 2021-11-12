import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


//criando tabela no banco de dados: tb_aluno
@Entity()
export class Aluno{
    @PrimaryGeneratedColumn()
    codAluno: number;

    @Column()
    nome: string;

    @Column()
    ra: string;

    @Column()
    idade: number;

    @Column()
    endereco: string;

    @Column()
    dataNasc: Date;

    @Column()
    matricula: boolean = true;

    @CreateDateColumn()
    criadoDia: Date;

    @UpdateDateColumn()
    atualizaDia: Date;
}