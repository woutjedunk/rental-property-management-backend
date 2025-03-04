export interface Mapper<DomainModel, DbEntity> {
    toDb(domainModel: DomainModel): DbEntity;
    toDomain(dbEntity: DbEntity): DomainModel;
}