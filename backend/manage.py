if __name__=='__main__':
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument('command', type=str,  help='Task to run')
    args = parser.parse_args()

    if args.command == 'migrate':
        from database import migrate
        migrate()
    elif args.command == 'runserver':
        import uvicorn
        uvicorn.run('app.app:app', port=8000, reload=True)
