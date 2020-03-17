export class Recipe {
    constructor(
      private id: string,
      private title: string,
      private creationDate: Date,
      private description: string,
      private userId: string
    ) {}

      public getId(): string {
        return this.id;
      }
    
      public setId(id: string): void {
        this.id = id;
      }

      public getTitle(): string {
        return this.title;
      }
    
      public setTitle(title: string): void {
        this.title = title;
      }
              
      public getCreationDate(): Date {
        return this.creationDate;
      }
    
      public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
      }
      
      public getDescription(): string {
        return this.description;
      }
    
      public setDescription(description: string): void {
        this.description = description;
      }
      
      public getUserId(): string {
        return this.userId;
      }
    
      public setUserId(userId: string): void {
        this.userId = userId;
      }
    
}